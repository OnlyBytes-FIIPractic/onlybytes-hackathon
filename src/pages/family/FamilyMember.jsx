import { Routes, Route } from "react-router-dom";
import routes from "@/routes";
import { UserAuth } from "@/context/AuthContext";
import { getPhotosByUserId } from "@/configs/firebaseFunctions.js";
import { useEffect, useState } from "react";

export function FamilyMember() {
    const { user } = UserAuth();
    const [groupedPhotos, setGroupedPhotos] = useState([]);

    const fetchPhotos = async () => {
        if (user.uid == null) return;
        const fetchedPhotos = await getPhotosByUserId(user.uid);
        fetchedPhotos.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort photos by date
        groupPhotosByDate(fetchedPhotos.sort((a, b) => new Date(b.date) - new Date(b.date)));
    };

    const groupPhotosByDate = (photos) => {
        const groups = photos.reduce((acc, photo) => {
            const date = photo.date || "Date not available";
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(photo);
            return acc;
        }, {});
        setGroupedPhotos(groups);
    };

    useEffect(() => {
        fetchPhotos();
    }, [user]);

    return (
        <div className="bg-surface-darkest">
            <div className="p-4 xl:ml-100 me-5">
                <Routes>
                    {routes.map(({ layout, pages }) =>
                        layout === "dashboard" &&
                        pages.map(({ path, element }) => (
                            <Route exact path={path} element={element} key={path} />
                        ))
                    )}
                </Routes>
                <div className="p-10 ms-10 shadow rounded bg-surface">
                    <h1 className="text-2xl font-bold text-secondary">Family Member Memories</h1>
                    <div className="relative flex flex-col items-center">
                        <div className="absolute inset-0 left-full border-l-2 border-purple-400" />
                        {Object.entries(groupedPhotos).map(([date, photos], index) => (
                            <div key={index} className="w-full flex flex-col items-start text-center mb-5">
                                <div className="w-full flex justify-end">
                                    <h2 className="text-lg font-bold text-primary my-5 me-5">{date}</h2>
                                </div>
                                <div className="flex flex-wrap justify-center">
                                    {photos.map((photo, idx) => (
                                        <div key={idx} className="flex items-center flex-col ml-10">
                                            <img
                                                src={photo.url}
                                                alt={photo.caption}
                                                className="h-32 w-32 object-cover rounded"
                                            />
                                            <div className="bg-black bg-opacity-70 text-white p-2 mt-2 text-truncate w-32">
                                                <p>{photo.description || "No description available"}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

FamilyMember.displayName = "/src/layout/dashboard.jsx";