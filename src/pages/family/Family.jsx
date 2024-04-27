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
                img1: "man1",
                partner: "Mother",
                img2: "woman1",
                children: [
                    {
                        name: "Child 1",
                        partner: "Child 1's partner",
                        children: [
                            {
                                name: "Grandchild 2",
                                children: []
                            }
                        ]
                    },
                    {
                        name: "Child 2",
                        partner: "Child 2's partner",
                        children: []
                    }
                ],
            },
            {
                name: "Uncle",
                img1: "man2",
                partner: "Aunt",
                img2: "woman2",
                children: [
                    {
                        name: "Child 3",
                        partner: "Child 3's partner",
                        children: []
                    },
                    {
                        name: "Child 4",
                        children: []
                    },
                    {
                        name: "Child 4",
                        partner: "Child 4's partner",
                        children: [{
                            name: "Child 4",
                            partner: "Child 4's partner",
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
                <div className="p-4">
                    <Tree root={mockTree} />
                </div>
            </div>
        </div>
    );
}

Family.displayName = "/src/layout/family.jsx";
