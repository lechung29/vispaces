import React, { Fragment } from 'react'
import { AnimatedIconButton } from '../animatedComponent'
import { FaImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { useImmerState } from '@/hooks/useImmerState';
import { CreatePostDialog } from '../createpostdialog';
import { motion } from "framer-motion"
interface INewPostProps {

}

interface INewPostState {
    isOpenDialog: boolean;
}

const initialState: INewPostState = {
    isOpenDialog: false,
}

const NewPost: React.FunctionComponent<INewPostProps> = (_props) => {
    const [state, setState] = useImmerState<INewPostState>(initialState)
    const { isOpenDialog } = state
    return (
        <Fragment>
            <motion.div className='bg-white h-auto w-full p-4 rounded-lg drop-shadow-sm flex items-center justify-center gap-4'>
                <motion.div className='bg-customBg1 flex-1 text-center rounded-lg py-[10px] text-[#4b5563] font-medium cursor-pointer' onClick={() => setState({ isOpenDialog: true })}>
                    What do you have in mind?
                </motion.div>
                <AnimatedIconButton
                    variant="light"
                    size="xl"
                    radius="md"
                    aria-label="Photo"
                    onClick={() => setState({ isOpenDialog: true })}
                >
                    <FaImage />
                </AnimatedIconButton>
                <AnimatedIconButton
                    variant="light"
                    size="xl"
                    radius="md"
                    aria-label="Video"
                    color="pink"
                    onClick={() => setState({ isOpenDialog: true })}
                >
                    <FaVideo />
                </AnimatedIconButton>
            </motion.div>
            {isOpenDialog && <CreatePostDialog
                title='Create post'
                isOpen={isOpenDialog}
                onClose={() => setState({ isOpenDialog: false })}
                onSave={() => setState({ isOpenDialog: false })}
            />}
        </Fragment>
    )
}

export default NewPost