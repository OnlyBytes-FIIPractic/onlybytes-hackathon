import { Routes, Route } from "react-router-dom";
import routes from "@/routes";
import Tree from "./Tree";
import { UserAuth } from "@/context/AuthContext.jsx";
import { useEffect, useState } from "react";
import { getFamilyByUserId } from "@/configs/firebaseFunctions.js";
import CreateFamily from "@/pages/createFamily/CreateFamily.jsx";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Option, Select, Spinner } from "@material-tailwind/react";
import SelectOption from "@material-tailwind/react/components/Select/SelectOption";
import { AttachMoney } from "@mui/icons-material";

export function Family() {
    const { user } = UserAuth();
    const [family, setFamily] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const fetchFamily = async () => {
        if (user.uid == null) return;
        const fetchedFamily = await getFamilyByUserId(user.uid);
        console.log(fetchedFamily)
        setFamily(fetchedFamily);
    };

    useEffect(() => {
        fetchFamily();
    }, [user]);

    const mockTree = {
        name: family?.name || "My Family",
        children: [
            {
                name: "Vasile Onlybytes",
                img1: "man3",
                partner: "Maria Onlybytes",
                img2: "woman3",
                children: [
                    {
                        name: "Georgiana Onlybytes",
                        img1: "woman1",
                        partner: "Mihai Onlybytes",
                        img2: "man1",
                        children: [
                            {
                                name: "Mihai Jr. Onlybytes",
                                img1: "boy",
                                children: []
                            }
                        ]
                    },
                    {
                        name: "Andreea Onlybytes",
                        img1: "woman2",
                        partner: "Ionut Onlybytes",
                        img2: "man2",
                        children: []
                    }
                ],
            },
            {
                name: "Marc Onlybytes",
                img1: "woman5",
                partner: "Alexandra Onlybytes",
                img2: "woman6",
                children: [
                    {
                        name: "Marian Onlybytes",
                        img1: "man12",
                        partner: "Carla Onlybytes",
                        img2: "woman11",
                        children: []
                    },
                    {
                        name: "Gabriela Onlybytes",
                        img1: "woman12",
                        children: []
                    },
                    {
                        name: "Vitalie Onlybytes",
                        img1: "man21",
                        partner: "Viorica Onlybytes",
                        img2: "woman21",
                        children: [{
                            name: "George Onlybytes",
                            img1: "young1",
                            partner: "Ana Onlybytes",
                            img2: "young2",
                            children: []
                        }
                        ]
                    }
                ]
            }
        ]
    };

    if (!user.uid) return <Spinner />

    if (!family) {
        return <CreateFamily fetchFamily={fetchFamily} />;
    }

    return (
        <div className="bg-surface-darkest">
            <div className="p-4 xl:ml-100 me-5">
                <Routes>
                    {routes.map(
                        ({ layout, pages }) =>
                            layout === "family" &&
                            pages.map(({ path, element }) => (
                                <Route exact path={path} element={element} />
                            ))
                    )}
                </Routes>
                <div className="p-10 ms-10 shadow rounded bg-surface">
                    <div className="w-full flex justify-between">
                        <h1 className="text-2xl font-bold text-secondary">Family Tree</h1>
                        <Button
                            color="purple"
                            onClick={() => setShowModal(true)}
                        >
                            Add Member
                        </Button>
                    </div>
                    <Tree root={mockTree} />
                    <Dialog open={showModal}>
                        <DialogHeader>
                            <span>Add a New Member</span>
                            <i className={"fas fa-xmark ml-auto cursor-pointer"} onClick={() => setShowModal(false)} />
                        </DialogHeader>
                        <DialogBody>
                            <h3 className="text-xl mb-2">Member email</h3>
                            <Input
                                placeholder="Enter member email"
                                className="mb-4"
                            />
                            {/* select one parent */}
                            <h3 className="text-xl mt-4 mb-2">Select parent</h3>
                            <div className="flex items-center mb-2">
                                <Select
                                    fullWidth
                                    className="h-10"
                                >
                                    <SelectOption value="Vasile">Vasile</SelectOption>
                                    <SelectOption value="Maria">Maria</SelectOption>
                                    <SelectOption value="Marc">Marc</SelectOption>
                                    <SelectOption value="Alexandra">Alexandra</SelectOption>
                                </Select>
                            </div>
                        </DialogBody>
                        <DialogFooter>
                            <div className="flex items-center justify-between text-primary text-lg me-3">
                                <AttachMoney className="w-6 h-6 text-primary" /> <p className="mt-1">5.00</p>
                            </div>
                            <Button className="shadow-md bg-secondary hover:bg-primary"
                                ripple
                            >Add Member</Button>
                        </DialogFooter>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}

Family.displayName = "/src/layout/family.jsx";
