import React, { useState } from 'react';
import GlobalModal from './GlobalModal';
import axiosInstance from '../utils/axios';


const Problem2 = () => {
    const [page,setPage] = useState(1)
    const [pageSize,setPageSize] = useState(10)
    const [search,setSearch] = useState(' ')
    const [modalOpen,setModalOpen] = useState({
        all:false,
        us:false,
    })
    const handleModal = (item) =>{
        if(item === 'all'){
            setModalOpen((prev)=>({...prev,all:true,us:false}))
            fetchData()
            
        }else if (item === 'us'){
            setModalOpen((prev)=>({...prev,all:false,us:true}))
        }
        // setModalOpen(true)
    }

    const handleModalClose = () =>{
        setModalOpen((prev)=>({...prev,all:false,us:false}))
    }


    const fetchData = async () => {
        // setIsLoading(true)
        const headers = { 'Accept': 'application/json',
        'X-CSRFToken': 'PLATfOPnW77xHj4IkLIOzne3ZzVXuelBnCWnA3fDWhPqaFi0aMG9OvzLxq07qyLs' }
        try {

            const response = await fetch(`https://contact.mediusware.com/api/contacts/?search=${search}&page=${page}&page_size=${pageSize}`, {headers,mode: 'no-cors'})
            const data = await response.json()
            console.log(data)
        } catch (err) {
               
        } 
    }



    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button onClick={()=>handleModal('all')} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                <button onClick={()=>handleModal('us')} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>
                
            </div>

            {
                modalOpen.all && 
                <GlobalModal handleModalClose={handleModalClose} customOpen={modalOpen.all}>
                    <h1>All</h1>
                 <button onClick={()=>handleModal('all')} className="btn btn-lg btn-secondary mr-2" style={{"background-color":"#46139f","margin-right":"8px"}} type="button" >All Contacts</button>
                <button onClick={()=>handleModal('us')} className="btn btn-lg btn-outline-warning" style={{"background-color":"#ff7f50","margin-right":"8px"}} type="button" >US Contacts</button>
                <button onClick={handleModalClose} className="btn btn-lg btn-outline-warning" type="button" >Close</button>
            </GlobalModal>
            }



            {
                modalOpen.us && 
                <GlobalModal handleModalClose={handleModalClose} customOpen={modalOpen.us}>
                    <h1>Us</h1>
                  <button onClick={()=>handleModal('all')} className="btn btn-lg btn-secondary mr-2" style={{"background-color":"#46139f","margin-right":"8px"}} type="button" >All Contacts</button>
                <button onClick={()=>handleModal('us')} className="btn btn-lg btn-outline-warning" style={{"background-color":"#ff7f50","margin-right":"8px"}} type="button" >US Contacts</button>
                <button onClick={handleModalClose} className="btn btn-lg btn-outline-warning" type="button" >Close</button>
            </GlobalModal>
            }

            
            
            
        </div>
    );
};

export default Problem2;