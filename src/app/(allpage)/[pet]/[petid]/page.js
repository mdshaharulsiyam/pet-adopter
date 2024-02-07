

import { getSinglePet } from '@/utils/getSinglePet';
import Image from 'next/image';
import React from 'react';

const petDetailPage = async ({ params }) => {
    const pet = await getSinglePet(params.petid)
    console.log(pet);
    return (
        <div>

            <div className=" md:flex items-center  px-5 max-w-full md:max-w-5xl h-full w-full mx-auto  rounded-xl overflow-hidden  my-4 shadow-lg">
                <div className="md:w-1/2">
                    <Image
                        width={500} height={400}
                        className="w-full h-[400px] object-cover object-center"
                        src={pet.petImage}
                        alt={pet.petName}
                    />
                </div>

                <div className="md:w-1/2 p-6">
                    <div className="mb-2">
                        <h2 className="text-2xl font-bold text-gray-800">{pet.petName}</h2>
                        <p>Age: {pet.petAge}</p>
                    </div>

                    <div className="flex mb-4">
                        <div className="flex-1">
                            <p className="text-sm text-gray-600">Category: {pet.petCategory}</p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="flex-1">
                            <p className="text-sm text-gray-600">Location: {pet.petLocation}</p>
                        </div>
                    </div>

                    <p className="text-gray-700">{pet.description}</p>

                    <div className="mt-4 flex gap-10 items-center">
                        <button className="hover:bg-[#f28583] bg-[#FA524F] text-white font-bold py-2 px-4 rounded">
                            Adopt
                        </button>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default petDetailPage;