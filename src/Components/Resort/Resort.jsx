import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';
import { FaObjectUngroup } from 'react-icons/fa';

const Resort = ({ resort }) => {
    const { image, resort_name, resort_place, rating, price, stay_duration } = resort;

    return (
        <div className='p-5 shadow-xl rounded-3xl bg-white'>
            <img className='h-64 w-full rounded-3xl' src={image} alt="" />
            <h2 className='text-2xl font-bold py-3'>{resort_name}</h2>
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <div className='flex items-center text-xl text-yellow-400'>
                        <FaLocationDot></FaLocationDot>
                    </div>
                    <p>{resort_place}</p>
                </div>
                <div className='flex gap-3'>
                    <div className='flex items-center  text-xl text-yellow-400'>
                        <AiFillStar></AiFillStar>
                    </div>
                    <p>{rating}</p>
                </div>
            </div>
            <div className='flex justify-between my-4'>
                <p className='text-3xl font-bold'>${price}</p>
                <div className='flex gap-3'>
                    <div className='flex items-center  text-xl'>
                        <FaObjectUngroup></FaObjectUngroup>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-xl'>{stay_duration}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Resort.propTypes = {
    resort: PropTypes.object,
};

export default Resort;