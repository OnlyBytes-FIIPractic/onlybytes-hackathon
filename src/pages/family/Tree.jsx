import React, { useState } from 'react';
import { Popover } from '@mui/material';
import { v4 as uuidv4, v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const TreeNode = ({ data, root = false, next = false }) => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [popoverContent, setPopoverContent] = useState("");

    const handlePopoverOpen = (content) => {
        setPopoverContent(content);
        setIsVisible(true);
    };

    const handlePopoverOpen2 = (content) => {
        setPopoverContent(content);
        setIsVisible2(true);
    };


    const handlePopoverClose = () => {
        setIsVisible(false);
        setIsVisible2(false);
    };

    return (
        <div className="node me-6">
            <div className='flex flex-row'>
                <div className='flex flex-col me-2'>
                    <div className='vertical-line' hidden={root} />
                    <span
                        onClick={() => navigate(`/dashboard/family-member/${v4()}`)}
                        onMouseEnter={() => handlePopoverOpen(data.name)}
                        onMouseLeave={handlePopoverClose}
                        className={`${root && 'background-image-filter'}`}
                        style={{
                            borderRadius: root ? '1.5rem' : '100%',
                            border: root ? 'none' : '1px solid #ccc;',
                            backgroundImage: root ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('../img/heart.png')` : `url('../img/${data.img1}.webp')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '40px',
                            width: '40px',
                            padding: '35px'
                        }}
                    >
                        {root ? <></> : <></>}
                    </span>
                    {isVisible && (
                        <div className="absolute bg-white border border-gray-300 shadow-lg p-2 rounded-md text-sm z-10"
                            style={{ marginTop: '5px' }}>
                            {popoverContent}
                        </div>
                    )}
                    <div className='vertical-line' hidden={data.children.length === 0} />
                </div>

                {data.partner && (
                    <div className='flex flex-col'>
                        <div className='vertical-line opacity-0'></div>
                        <span
                            onClick={() => navigate(`/dashboard/family-member/${v4()}`)}
                            onMouseEnter={() => handlePopoverOpen2(data.partner)}
                            onMouseLeave={handlePopoverClose}
                            style={{ borderRadius: '100%', backgroundImage: `url('../img/${data.img2}.webp')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '40px', width: '40px' }}
                        >
                            <></>
                        </span>
                        {isVisible2 && (
                            <div className="absolute bg-white border border-gray-300 shadow-lg p-2 rounded-md text-sm z-10"
                                style={{ marginTop: '5px' }}>
                                {popoverContent}
                            </div>
                        )}
                        <div className='vertical-line' hidden={data.children.length === 0} />
                    </div>
                )}
            </div>
            <div className='w-5/6 color-line' hidden={data.children.length === 0} />
            {data.children && (
                <div className="children mx-2">
                    {data.children.map((child, index) => (
                        <TreeNode key={uuidv4()} data={child} next={data.children.length === 1 ? true : index < data.children.length - 1} />
                    ))}
                </div>
            )}
        </div>
    );
};

const Tree = ({ root }) => {
    return (
        <div className="tree">
            <TreeNode data={root} root={true} />
        </div>
    );
};

export default Tree;
