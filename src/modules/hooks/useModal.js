import {useState} from 'react';

/**
 * Hooks - useModal for modal's open state
 * @returns {{isOpen: boolean, handleOpen: (function(): void), handleClose: (function(): void)}}
 */
const useModal = ()=>{
    // 모달의 상태를 관리하는 커스텀 훅
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

    return {isOpen,  handleClose, handleOpen};
}


export default useModal;