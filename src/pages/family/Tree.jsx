import React from 'react';
import { Popover } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const TreeNode = ({ data, root = false, next = false }) => {
    return (
        <div className="node overflow-hidden me-6" key={uuidv4()}>
            <div className='flex flex-row'>
                <div className='flex flex-col me-2'>
                    <div className='vertical-line' hidden={root} />
                    <span style={{ borderRadius: root ? '1.5rem' : '100%', backgroundImage: `url('../img/${data.img1}.webp')`, backgroundSize: 'cover', backgroundPosition: 'center', height: !root ? '40px' : 'auto' , width: !root ? '40px' : 'auto', padding: !root ? '35px' : '20px'  }}>
                        {root ? data.name : <></>}
                    </span>
                    <div className='vertical-line mt-2' hidden={data.children.length === 0} />
                </div>

                {data.partner &&
                    <div className='d-flex flex-col'>
                        <div className='vertical-line opacity-0'></div>
                        <span style={{ borderRadius: '100%', backgroundImage: `url('../img/${data.img2}.webp')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '40px', width: '40px' }}>
                            <></>
                        </span>
                        <div className='vertical-line' hidden={data.children.length === 0} />
                    </div>
                }
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
