import { useForm } from 'react-hook-form';
import Modal from '../ui/Modal';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/features/tasks/tasksSlice';

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm()

    const dispatch = useDispatch()

    const onCancel = () => {
        reset()
        setIsOpen(false)
    }

    const onSubmit = (data) => {
        dispatch(addTask(data))
        onCancel()
    }


    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Programming Hero'}>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                    <div className='flex flex-col gap-3 mb-3'>
                        <label htmlFor="title" className="font-medium">Title</label>
                        <input type="text" {...register("name")} className='w-full rounded-md' />
                    </div>
                    <div className='flex flex-col gap-3 mb-3'>
                        <label htmlFor="title" className="font-medium">Description</label>
                        <textarea {...register("description")} rows="3" className='w-full rounded-md'></textarea>
                    </div>
                    <div className='flex flex-col gap-3 mb-3'>
                        <label htmlFor="title" className="font-medium">Deadline</label>
                        <input type="date" className='w-full rounded-md' />
                    </div>
                    <div className='flex flex-col gap-3 mb-3'>
                        <label htmlFor="title" className="font-medium">Assign to</label>
                        <select {...register("assignTo")} id="" className='w-full rounded-md'>
                            <option value="rabby">Rabby</option>
                            <option value="najir">Najir</option>
                            <option value="mehedi">Mehedi</option>
                            <option value="fahad">Fahad</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-3 mb-3'>
                        <label htmlFor="title" className="font-medium">Priority</label>
                        <select {...register("priority")} id="" className='w-full rounded-md'>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div className='flex gap-4 justify-end mt-5'>
                        <button onClick={() => onCancel()} className='btn btn-danger'>Cancel</button>
                        <button type='submit' className='btn btn-primary'>submit</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AddTaskModal;