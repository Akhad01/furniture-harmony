import React from 'react';
import BasketCard from '../components/BasketCard';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTE } from '../utils/consts';

const Basket = () => {
  const navigate = useNavigate();

  return (
    <section className='h-100' style={{ backgroundColor: '#eee' }}>
      <div className='container h-100 py-5'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-10'>
            <div className='d-flex justify-content-between align-items-center mb-4'>
              <h3 className='fw-normal mb-0 text-black'>Shopping Cart</h3>
              <div>
                <p className='mb-0'>
                  <span className='text-muted'>Sort by:</span>{' '}
                  <a href='#!' className='text-body'>
                    price <i className='fas fa-angle-down mt-1'></i>
                  </a>
                </p>
              </div>
            </div>

            {[...Array(5)].map((_, i) => (
              <BasketCard key={i} />
            ))}

            <div class='card mb-5'>
              <div class='card-body p-4'>
                <button
                  onClick={() => navigate(MAIN_ROUTE)}
                  type='button'
                  class='btn btn-light btn-lg me-2'
                >
                  Continue shopping
                </button>
                <div class='float-end'>
                  <p class='mb-0 me-5 d-flex align-items-center'>
                    <span class='small text-muted me-2'>Order total:</span>{' '}
                    <span class='lead fw-normal'>$799</span>
                  </p>
                </div>
              </div>
            </div>

            <div className='card mb-4'>
              <div className='card-body p-4 d-flex flex-row'>
                <div className='form-outline flex-fill'>
                  <input
                    type='text'
                    id='form1'
                    className='form-control form-control-lg'
                  />
                  <label className='form-label' htmlFor='form1'>
                    Discound code
                  </label>
                </div>
                <button
                  type='button'
                  className='btn btn-outline-warning btn-lg ms-3'
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basket;
