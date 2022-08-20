import React from 'react';
import DasboardPath from '../../components/DasboardPath';
export default function addproduct() {
  // const { register, handleSubmit, watch } = useForm();
  // const onSubmit = (data) => console.log(data);

  // console.log(watch('example')); // watch input value by passing the name of it
  return (
    <DasboardPath text={'Add Products'}>
      <div className="flex justify-center items-center">
        <form className="bg-gray-400  w-10/12 mt-10 p-4">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Enter Product Name</span>
              </label>
              <input
                {...register('name')}
                type="text"
                placeholder="Type here"
                className="input input-bordered  w-full  "
              />
            </div>
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Product category</span>
              </label>
              <select
                name=""
                id=""
                className="w-full h-12 rounded-md"
                {...register('category ')}
              >
                {['Kazi Farms ', 'Apple', 'Iqlo', 'Squre'].map((x) => (
                  <option value={x} key={x}>
                    {x}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Enter Brand</span>
              </label>
              <input
                {...register('brand ')}
                type="text"
                placeholder="Type here"
                className="input input-bordered  w-full  "
              />
            </div>
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Product Price</span>
              </label>
              <input
                {...register('price')}
                type="text"
                placeholder="Type here"
                className="input input-bordered  w-full  "
              />
            </div>
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Product Description</span>
              </label>
              <input
                {...register('description')}
                type="text"
                placeholder="Type here"
                className="input input-bordered  w-full  "
              />
            </div>
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Upload Image</span>
              </label>
              <input
                {...register('image')}
                type="text"
                placeholder="Type here"
                className="input input-bordered  w-full  "
              />
            </div>
          </div>
          <div className=" flex justify-end">
            <button type="submit" className="btn btn-group   ">
              Add
            </button>
          </div>
        </form>
      </div>
    </DasboardPath>
  );
}
