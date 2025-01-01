import PropTypes from 'prop-types';

const Player = ({ player }) => {
    const { name, country, image, role, battingType, bowlingType, biddingPrice } = player;
    return (
        <div className="">

            <div className="card card-compact bg-slate-300 w-96 shadow-xl">
                {/* <figure>
                    <img className="w-fit h-40 object-cover" src={image} alt="" />
                </figure> */}

                <figure>
                    <img
                        className="w-fit h-40 object-cover" // Added consistent styles
                        src={image}
                        alt={`${name}'s profile`}
                    />
                </figure>


                <div className="card-body">
                    <div className='flex gap-3'>
                        <img className='w-6 h-6' src="/src/assets/icons8-user-32.webp" alt="" />

                        <h2 className="card-title">{name}</h2>
                    </div>

                    <div className='flex gap-3'>
                        <img className='w-5 h-4' src="/src/assets/flagIcon.jpg" alt="" />
                        <h3 className='text-base'>{country}</h3>
                    </div>


                    <div className='flex justify-between'>
                        <h1 className='text-2xl'>Role</h1>
                        <h3 className='text-2xl text-blue-800' >{role}</h3>
                    </div>

                    <div className='flex justify-between'>
                        <h3 className='text-base '>{battingType}</h3>
                        <h3 className='text-base'>{bowlingType}</h3>
                    </div>



                    <div className='flex justify-between items-center'>
                        <h3 className='text-lg text-orange-900'>Price: $ {biddingPrice}</h3>
                    </div>

                    <button className="btn btn-accent">Choose Player</button>

                </div>
            </div>

        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired
}

export default Player;

