import { Routes, Route } from "react-router-dom";
import {
    Sidenav,
    DashboardNavbar
} from "@/widgets/layout";
import routes from "@/routes";
import Tree from "./Tree";

export function Family() {

    const mockTree = {
        name: "My Family",
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

    return (
        <div className="min-h-screen bg-surface-darkest">
            <div className="p-4 xl:ml-100">
                <DashboardNavbar />
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
