import React, {useState} from 'react';
import {Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input} from "@material-tailwind/react";
import {addDoc, collection} from "firebase/firestore";
import {db} from "@/configs/firebase.js";
import {UserAuth} from "@/context/AuthContext.jsx";
import {getUseridByEmail} from "@/configs/firebaseFunctions.js";
import {toast} from "react-toastify";

export default function CreateFamily({fetchFamily}) {
  const { user } = UserAuth();
  const [familyName, setFamilyName] = useState("");
  const [memberEmails, setMemberEmails] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const createFamily = async () => {
    if (!familyName) {
      toast.error("Invalid Family Name");
      return;
    }

    if (memberEmails.some(email => !email)) {
      toast.error("Please fill in all user emails.");
      return;
    }

    const uniqueEmails = Array.from(new Set([user.email, ...memberEmails]));
    const memberIds = [];
    for (const email of uniqueEmails) {
      try {
        const userId = await getUseridByEmail(email);
        if (!userId) {
          toast.error(`Invalid email: ${email}`);
          return;
        }
        memberIds.push(userId);
      } catch (error) {
        toast.error(`Failed to retrieve user ID for email: ${email}`);
        return;
      }
    }

    const family = {
      name: familyName,
      members: memberIds,
      createdAt: new Date(),
    }

    try {
      const docRef = await addDoc(collection(db, "families"), family);
      setShowModal(false);
      fetchFamily()

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const handleRemoveEmail = index => {
    const newEmails = [...memberEmails];
    newEmails.splice(index, 1);
    setMemberEmails(newEmails);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800 mt-5">No Family Found</h1>
          <p className="text-lg text-gray-600 mt-2">It looks like you don't belong to any family yet. Click below to start your own!</p>
          <Button
            color="lightBlue"
            buttonType="filled"
            size="regular"
            ripple="light"
            className="mt-4"
            onClick={() => setShowModal(true)}
          >
            Create Family
          </Button>
        </div>
      </div>

      <Dialog open={showModal}>
        <DialogHeader>
          <span>Create a New Family</span>
          <i className={"fas fa-xmark ml-auto cursor-pointer"} onClick={() => setShowModal(false)}/>
        </DialogHeader>
        <DialogBody>
          <h3 className="text-xl mb-2">Family name</h3>
          <Input
            placeholder="Enter family name"
            onChange={e => setFamilyName(e.target.value)}
            className="mb-4"
          />
          <h3 className="text-xl mt-4 mb-2">Members</h3>
          <div className="flex items-center mb-2">
            <Input className="flex-grow"
                   placeholder="Enter member email"
                   disabled={true}
                   value={user.email}/>
          </div>
          {memberEmails.map((memberEmail, i) => (
            <div key={i} className="flex items-center mb-2">
              <Input className="flex-grow"
                     placeholder="Enter member email"
                     value={memberEmail}
                     onChange={e => {
                       const newEmails = [...memberEmails];
                       newEmails[i] = e.target.value;
                       setMemberEmails(newEmails);
                     }}
              />
              <Button color="red" className="ml-2" onClick={() => handleRemoveEmail(i)}>Remove</Button>
            </div>
          ))}
          <Button onClick={() => setMemberEmails([...memberEmails, ""])}>Add Member</Button>
        </DialogBody>
        <DialogFooter>
          <Button className="shadow-md bg-secondary hover:bg-primary"
                  ripple
                  onClick={createFamily}>Add Family</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}