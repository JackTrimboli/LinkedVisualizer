import React from "react";

const PopupModal = (props) => {
  let modalData = 0;

  function setModalData(value) {
    modalData = value;
  }
  function dataHandler() {
    props.handlerAction(modalData);
  }

  if (props.show === true) {
    return (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-sm">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">{props.title}</h3>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto items-center">
                <input
                  type="number"
                  placeholder="Enter a number"
                  className="my-4 ml-5 text-blueGray-500 text-lg leading-relaxed text-center"
                  onChange={(e) => setModalData(e.target.value)}
                  defaultValue={0}
                />
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => props.handleShow()}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={dataHandler}
                >
                  {props.action}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    );
  } else return null;
};

export default PopupModal;
