import { Routes, Route } from "react-router-dom";
import routes from "@/routes";
import Tree from "./Tree";
import { UserAuth } from "@/context/AuthContext.jsx";
import { useEffect, useState } from "react";
import { getFamilyByUserId } from "@/configs/firebaseFunctions.js";
import CreateFamily from "@/pages/createFamily/CreateFamily.jsx";
import { Button, Spinner } from "@material-tailwind/react";

export function Family() {
    const { user } = UserAuth();
    const [family, setFamily] = useState(null);

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
                        <Button color="purple">Add Member</Button>
                    </div>
                    <Tree root={mockTree} />
                </div>
            </div>
        </div>
    );
}

Family.displayName = "/src/layout/family.jsx";
