import Link from 'next/link';
import NavbarThree from '../../../components/_App/NavbarThree';
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar';

const Profile = () => {
  return (
    <>
      <DashboardNavbar />
      <div className='main-content d-flex flex-column'>
        <NavbarThree />

        {/* <div className='breadcrumb-area'>
          <h1>My Profile</h1>
          <ol className='breadcrumb'>
            <li className='item'>
            <Link href='/dashboard'>

              <a>Home</a>
            </Link>
            </li>
            <li className='item'>
            <Link href='/dashboard'>

              <a>Dashboard</a>
            </Link>
            </li>
            <li className='item'>My Profile</li>
          </ol>
        </div> */}

        <div className='row'>
          <div className='col-lg-12 col-md-12'>
            <div className='my-profile-box'>
              <h3>Profile Details</h3>

              <form>
                <div className='row'>
                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group profile-box'>
                      <img src='/images/user1.jpg' alt='image' />
                      <div className='file-upload'>
                        <input
                          type='file'
                          name='file'
                          id='file'
                          className='inputfile'
                        />
                        <label htmlFor='file'>
                          <i className='bx bx-upload'></i> Upload Photo
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Your Name</label>
                      <input
                        type='text'
                        className='form-control'
                        value='Andy Smith'
                      />
                    </div>
                  </div> */}

                  <div className='col-xl-6 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Email</label>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='hello@andysmith.com'
                      />
                    </div>
                  </div>

                  <div className='col-xl-6 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Phone</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='+88 (123) 123456'
                      />
                    </div>
                  </div>

                  <div className='col-xl-6 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Your Name</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Andy Smith'
                      />
                    </div>
                  </div>

                  <div className='col-xl-6 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Type</label>
                      <select className='dashbaord-category-select'>
                        <option>Select Vendor Type</option>
                        <option>Photographers</option>
                      </select>
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>About</label>
                      <textarea
                        cols='30'
                        rows='6'
                        placeholder='Short description about you...'
                        className='form-control'
                      ></textarea>
                    </div>
                  </div>

                  <div className='col-xl-6 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Website URL</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='https://www.facebook.com/'
                      />
                    </div>
                  </div>

                  <div className='col-xl-6 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Facebook URL</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='https://twitter.com/'
                      />
                    </div>
                  </div>

                  <div className='col-xl-6 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Instagram URL</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='https://www.linkedin.com/'
                      />
                    </div>
                  </div>

                  <div className='col-xl-6 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Youtube URL</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='https://instagram.com/'
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* <div className='col-lg-6 col-md-12'>
            <div className='my-profile-box'>
              <h3>Change Password</h3>

              <form>
                <div className='row'>
                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Current Password</label>
                      <input
                        type='password'
                        className='form-control'
                        value='123456'
                      />
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>New Password</label>
                      <input type='password' className='form-control' />
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Confirm New Password</label>
                      <input type='password' className='form-control' />
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <button type='submit'>Change Password</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div> */}
        </div>

        <div className='row'>
          <div className='col-lg-12 col-md-12'>
            <div className='my-profile-box'>
              <h3>ADDRESS</h3>

              <form>
                <div className='row'>
                  <div className='col-xl-6 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>PIN code</label>
                      <input
                        type='text'
                        className='form-control'
                        value=''
                      />
                    </div>
                  </div>

                  <div className='col-xl-6 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Door no., Building</label>
                      <input
                        type='text'
                        className='form-control'
                        value=''
                      />
                    </div>
                  </div>

                  <div className='col-xl-6 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Street, Sector, Area, Colony</label>
                      <input
                        type='text'
                        className='form-control'
                        value=''
                      />
                    </div>
                  </div>

                  <div className='col-xl-6 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Landmark</label>
                      <input
                        type='text'
                        className='form-control'
                        value=''
                      />
                    </div>
                  </div>

                  <div className='col-xl-6 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>State</label>
                      <select className='dashbaord-category-select'>
                        <option>Select State</option>
                        <option>1</option>
                      </select>
                    </div>
                  </div>

                  <div className='col-xl-6 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>City</label>
                      <select className='dashbaord-category-select'>
                        <option>Select City</option>
                        <option>1</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Service offered */}

            <div className='my-profile-box'>
              <section className='widget widget_distance'>
                <h3 className='widget-title'>SERVICES OFFERED</h3>
                <form>
                  <section className='listings-area '>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-xl-4 col-lg-6 col-md-12'>
                          <aside className='listings-widget-area'>
                            <section className='widget widget_categories'>
                              <ul>
                                <li>
                                  <input id='categories1' type='checkbox' />
                                  <label htmlFor='categories1'>All</label>
                                </li>
                                <li>
                                  <input id='categories2' type='checkbox' />
                                  <label htmlFor='categories2'>Baby Shoot</label>
                                </li>
                                <li>
                                  <input id='categories3' type='checkbox' />
                                  <label htmlFor='categories3'>Destination wed photography</label>
                                </li>
                                <li>
                                  <input id='categories4' type='checkbox' />
                                  <label htmlFor='categories4'>Bridal portraits</label>
                                </li>
                                <li>
                                  <input id='categories5' type='checkbox' />
                                  <label htmlFor='categories5'>Digital album</label>
                                </li>
                                <li >
                                  <input id='categories6' type='checkbox' />
                                  <label htmlFor='categories6'>Wedding films</label>
                                </li>
                                <li>
                                  <input id='categories7' type='checkbox' />
                                  <label htmlFor='categories7'>Save the Date Videos</label>
                                </li>
                              </ul>
                            </section>
                          </aside>
                        </div>
                        <div className='col-xl-4 col-lg-6 col-md-12'>
                          <aside className='listings-widget-area'>
                            <section className='widget widget_categories'>
                              <ul>
                                <li>
                                  <input id='categories1' type='checkbox' />
                                  <label htmlFor='categories1'>Wedding Photography</label>
                                </li>
                                <li>
                                  <input id='categories2' type='checkbox' />
                                  <label htmlFor='categories2'>Post-wedding photography</label>
                                </li>
                                <li>
                                  <input id='categories3' type='checkbox' />
                                  <label htmlFor='categories3'>Candid photography</label>
                                </li>
                                <li>
                                  <input id='categories4' type='checkbox' />
                                  <label htmlFor='categories4'>Traditional photography</label>
                                </li>
                                <li>
                                  <input id='categories5' type='checkbox' />
                                  <label htmlFor='categories5'>Photo booth</label>
                                </li>
                                <li>
                                  <input id='categories6' type='checkbox' />
                                  <label htmlFor='categories6'>Video teasers</label>
                                </li>
                                <li>
                                  <input id='categories7' type='checkbox' />
                                  <label htmlFor='categories7'>Wedding Films</label>
                                </li>
                              </ul>
                            </section>
                          </aside>
                        </div>
                        <div className='col-xl-4 col-lg-6 col-md-12'>
                          <aside className='listings-widget-area'>
                            <section className='widget widget_categories'>
                              <ul>
                                <li>
                                  <input id='categories1' type='checkbox' />
                                  <label htmlFor='categories1'>Pre Wedding Shoot</label>
                                </li>
                                <li>
                                  <input id='categories2' type='checkbox' />
                                  <label htmlFor='categories2'>Concept photography</label>
                                </li>
                                <li>
                                  <input id='categories3' type='checkbox' />
                                  <label htmlFor='categories3'>Couple portraits</label>
                                </li>
                                <li>
                                  <input id='categories4' type='checkbox' />
                                  <label htmlFor='categories4'>Photo album</label>
                                </li>
                                <li>
                                  <input id='categories5' type='checkbox' />
                                  <label htmlFor='categories5'>Fashion Shoots</label>
                                </li>
                                <li>
                                  <input id='categories6' type='checkbox' />
                                  <label htmlFor='categories6'>Image editing</label>
                                </li>
                                <li>
                                  <input id='categories7' type='checkbox' />
                                  <label htmlFor='categories7'>Teaser Videos</label>
                                </li>                                
                              </ul>
                            </section>
                              </aside>
                        </div>

                      </div>
                    </div>
                  </section>
            

                </form>
              </section>
            </div>
            
        <div className='row'>
          <div className='col-lg-12 col-md-12'>
            <div className='my-profile-box'>
              <h3>PACKAGES</h3>

              <form>
                <div className='form-group'>
                  <button type='submit'>Add</button>
                </div>
                <div className='row'>
                  <div className='col-xl-6 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Name</label>
                      <input
                        type='text'
                        className='form-control'
                        value=''
                      />
                    </div>
                  </div>

                  <div className='col-xl-4 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Price per day</label>
                      <input
                        type='number'
                        className='form-control'
                        value=''
                      />
                    </div>
                  </div>
                  <div className='col-xl-2 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label><br /></label>
                      <button type='submit'>Remove</button>
                    </div>
                  </div>
                  <div className='add-listings-box'>
                    <div className='form-group'>
                      <h3>ADDITIONAL INFORMATION</h3>
                      <ul className='facilities-list'>
                        <p>How long you have been into photography?</p>
                        <li>
                          <label className='checkbox'>
                            <input
                              type='radio'
                              name='facilities-list'
                              value='free-wifi'
                              checked
                            />
                            <span>0 - 3 years</span>
                          </label>
                        </li>
                        <li>
                          <label className='checkbox'>
                            <input
                              type='radio'
                              name='facilities-list'
                              value='parking'
                            />
                            <span>3 - 5 years</span>
                          </label>
                        </li>
                        <li>
                          <label className='checkbox'>
                            <input
                              type='radio'
                              name='facilities-list'
                              value='fitness-center'
                              checked
                            />
                            <span>5 - 7 years</span>
                          </label>
                        </li>
                        <li>
                          <label className='checkbox'>
                            <input
                              type='radio'
                              name='facilities-list'
                              value='non-smoking-rooms'
                            />
                            <span>7 - 10 years</span>
                          </label>
                        </li>
                        <li>
                          <label className='checkbox'>
                            <input
                              type='radio'
                              name='facilities-list'
                              value='airport-shuttle'
                              checked
                            />
                            <span>10+ years</span>
                          </label>
                        </li>
                      </ul>

                    </div>

                  </div>

                </div>
                <div className='row'>
                  <div className='col-xl-6 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Payment terms</label>
                      <textarea
                        cols='30'
                        rows='6'
                        placeholder=''
                        className='form-control'
                      ></textarea>
                    </div>
                  </div>

                  <div className='col-xl-6 col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Additional costs</label>
                      <textarea
                        cols='30'
                        rows='6'
                        placeholder=''
                        className='form-control'
                      ></textarea>
                    </div>
                  </div>
                </div>

              </form>

            </div>
          </div>
        </div>

        {/* save button section */}
        <div className='row'>
          <div className='col-lg-12 col-md-12'>
            <div className='my-profile-box'>
              <form>
                <div className='row'>
                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <button type='submit'>Save Change</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className='flex-grow-1'></div>

        <div className='copyrights-area'>
          <div className='row align-items-center'>
            <div className='col-lg-12 col-sm-12 col-md-12'>
              <p>
                <i className='bx bx-copyright'></i>2020 <a href='#'>Indice</a>. All
                rights reserved
              </p>
            </div>

            <div className='col-lg-6 col-sm-6 col-md-6 text-right'>
              <p>
                Designed by ❤️{' '}
                <a href='https://envytheme.com/' target='_blank' rel="noreferrer">
                  EnvyTheme
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
