import React from 'react';
import { Avatar, Rating } from '@mui/material';

const Comment = (props: any) => {

    return (
        <>
            <div className='flex gap-4'>
                <div>
                    <Avatar alt="Remy Sharp" />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-3'>
                        <h2 className='text-lg'>{props ? props?.data?.name : ""}</h2>
                        <Rating name="read-only" value={props ? props?.data?.rate : ""} size='small' readOnly />
                    </div>
                    <h4 className='text-sm text-zinc-500'>{props ? props?.data?.time : ""}</h4>
                    <p className='text-sm text-zinc-500'>
                        {props ? props?.data?.comment : ""}
                    </p>
                </div>
            </div>
            <hr className='text-zinc-300'/>
        </>
    );
};

export default Comment;