import { Routes, Route } from "react-router-dom";
import routes from "@/routes";
import Tree from "./Tree";
import {UserAuth} from "@/context/AuthContext.jsx";
import {useEffect, useState} from "react";
import {getFamilyByUserId} from "@/configs/firebaseFunctions.js";
import CreateFamily from "@/pages/createFamily/CreateFamily.jsx";
import {Spinner} from "@material-tailwind/react";

export function Family() {
    const { user } = UserAuth();
    const [family, setFamily] = useState(null);

    const fetchFamily = async () => {
        if(user.uid == null) return;
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
                name: "Father",
                img1: "man3",
                partner: "Mother",
                img2: "woman3",
                children: [
                    {
                        name: "Child 1",
                        img1: "woman1",
                        partner: "Child 1's partner",
                        img2: "man1",
                        children: [
                            {
                                name: "Grandchild 2",
                                img1: "boy",
                                children: []
                            }
                        ]
                    },
                    {
                        name: "Child 2",
                        img1: "woman2",
                        partner: "Child 2's partner",
                        img2: "man2",
                        children: []
                    }
                ],
            },
            {
                name: "Uncle",
                img1: "woman5",
                partner: "Aunt",
                img2: "woman6",
                children: [
                    {
                        name: "Child 3",
                        img1: "man12",
                        partner: "Child 3's partner",
                        img2: "woman11",
                        children: []
                    },
                    {
                        name: "Child 4",
                        img1: "woman12",
                        children: []
                    },
                    {
                        name: "Child 4",
                        img1: "man21",
                        partner: "Child 4's partner",
                        img2: "woman21",
                        children: [{
                            name: "Child 4",
                            img1: "young1",
                            partner: "Child 4's partner",
                            img2: "young2",
                            children: []
                        }
                        ]
                    }
                ]
            }
        ]
    };

    if(!user.uid) return <Spinner />

    if (!family) {
        return <CreateFamily fetchFamily={fetchFamily}/>;
    }

    return (
        <div className="min-h-screen bg-surface-darkest">
            <div className="p-4 xl:ml-100">
                <Routes>
                    {routes.map(
                        ({ layout, pages }) =>
                            layout === "family" &&
                            pages.map(({ path, element }) => (
                                <Route exact path={path} element={element} />
                            ))
                    )}
                </Routes>
                <div className="p-4 ms-10">
                    <Tree root={mockTree} />
                </div>
            </div>
        </div>
    );
}

Family.displayName = "/src/layout/family.jsx";
