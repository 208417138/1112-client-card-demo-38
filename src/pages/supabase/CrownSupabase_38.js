import { useState, useEffect } from 'react';
import Wrapper from '../../assets/wrapper/Crown_38';

const base_url = `https://leelkilskvzrjbvyabmp.supabase.co/rest/v1/category2_xx?select=*`;

let url = `${base_url}`;

const options = {
  method: 'GET',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlZWxraWxza3Z6cmpidnlhYm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxMzk2ODUsImV4cCI6MjAwMTcxNTY4NX0.BEIxJpzACppNmuuWBv01rrrI5t_OBlO71MElfVGHO_0',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlZWxraWxza3Z6cmpidnlhYm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxMzk2ODUsImV4cCI6MjAwMTcxNTY4NX0.BEIxJpzACppNmuuWBv01rrrI5t_OBlO71MElfVGHO_0',
  },
};

const CrownStaticPage_38 = () => {
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    const res = await fetch(url, options);
    const data = await res.json();
    setCategory(data);
    console.log('category', data);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Wrapper>
      <div className='header'>
        <a href='/' className='logo-container'>
          <img src='/crown/assets/crown.svg' />
        </a>
        <div className='options'>
          <a href='./overview.html' className='option'>
            Shop
          </a>
          <a href='/shop' className='option'>
            Contact
          </a>
          <a href='/signin' className='option'>
            Sign In
          </a>
          <div className='cart-icon' onclick='cartToggle()'>
            <img
              className='shopping-icon'
              src='/crown/assets/shopping-bag.svg'
              alt=''
            />
          </div>
          <div className='cart-dropdown'>
            <div className='cart-items'>
              <div className='cart-item'>
                <img
                  src='https://i.ibb.co/QdJwgmp/brown-cowboy.png'
                  alt='item'
                />
                <div className='item-details'>
                  <span className='name'>Brown Cowboy</span>
                  <span className='price'>4 * $35</span>
                </div>
              </div>
              <div className='cart-item'>
                <img
                  src='https://i.ibb.co/mJS6vz0/blue-jean-jacket.png'
                  alt='item'
                />
                <div className='item-details'>
                  <span className='name'>Blue Jean Jacket</span>
                  <span className='price'>1 * $90</span>
                </div>
              </div>
            </div>
            <button className='custom-button'>GO TO CHECKOUT</button>
          </div>
        </div>
      </div>
      <div className='title'>Crown2--supabase (208417138)</div>
      <div className='homepage'>
        <div className='directory-menu'>
          {category.map((item) => {
            const { id, size, name, remote_url, link_url } = item;
            return (
              <div key={id} className={`${size} menu-item`}>
                <img
                  className='background-image'
                  src={remote_url}
                  alt=''
                />
                <a href={link_url} className='content'>
                  <h1 className='title'>{name}</h1>
                  <span className='subtitle'>SHOP NOW</span>
                </a>
              </div>
            );
          })}

          {/* <div className='menu-item'>
            <img
              className='background-image'
              src='https://i.ibb.co/px2tCc3/jackets.png'
              alt=''
            />
            <a href='./jackets.html' className='content'>
              <h1 className='title'>JACKETS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div className='menu-item'>
            <img
              className='background-image'
              src='https://i.ibb.co/0jqHpnp/sneakers.png'
              alt=''
            />
            <a href='./sneakers.html' className='content'>
              <h1 className='title'>SNEAKERS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div className='large menu-item'>
            <img
              className='background-image'
              src='https://i.ibb.co/GCCdy8t/womens.png'
              alt=''
            />
            <a href='./womens.html' className='content'>
              <h1 className='title'>WOMENS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div className='large menu-item'>
            <img
              className='background-image'
              src='https://i.ibb.co/R70vBrQ/men.png'
              alt=''
            />
            <a href='./mens.html' className='content'>
              <h1 className='title'>MENS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </a>
          </div> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default CrownStaticPage_38;
