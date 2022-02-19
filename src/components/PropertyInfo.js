import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBed } from '@fortawesome/free-solid-svg-icons'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

{/* <h1>  <FontAwesomeIcon icon={faBed} color="red" size="500px" /> 3 </h1>   */ }






export default function PropertyInfo(props) {

    return (
        <div id='PropertyInfo'>

            <Box sx={{ flexGrow: 0 }}>
                <Grid container spacing={0}>

                    <Grid item xs={3}>
                        <svg width="28" height="28" label=""><g stroke="#000" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M13.795 13.997c-.462-.323-.765-.622-.844-.88v-1.034c.668-.7 1.196-1.674 1.507-2.816.75-.54.935-1.648.316-2.43V4.525c0-2.388-1.3-4.024-4.272-4.024C7.607.5 6.23 2.136 6.23 4.524v2.315a1.7 1.7 0 0 0 .315 2.428c.312 1.142.84 2.117 1.507 2.816v1.034c-.299.984-3.875 2.566-7.095 3.84a.737.737 0 0 0-.456.688v1.089M22.101 14.547a4.288 4.288 0 1 0-6.063 6.064 4.288 4.288 0 0 0 6.063-6.064zM18.332 19.313l2.752-2.941M18.332 19.313l-1.277-1.366"></path></g></svg>
                        <h5>  Verfied </h5>
                    </Grid>

                    <Grid item xs={1}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 33 27" label=""><g fill="none" fill-rule="evenodd" stroke="#2E3A4A" stroke-linecap="round" stroke-linejoin="round"><path fill="#C9F8EE" d="M6.9 11.17V7.046c0-.838.59-1.46 1.338-1.24.954.28 2.26.468 3.658.05.734-.219 1.437.423 1.437 1.249v4.065M18.633 11.17V7.046c0-.838.59-1.46 1.338-1.24.955.28 2.261.468 3.659.05.734-.219 1.436.423 1.436 1.249v4.065"></path><path d="M31.467 16.533H.533v-.19c0-2.736 3.114-5.143 6.955-5.143h17.024c3.841 0 6.955 2.407 6.955 5.143v.19zM.533 22.933h30.934v-6.4H.533zM.533 22.933V26M31.467 22.933V26"></path><path d="M3.733 12.04V.534h24.534v11.508"></path></g></svg>
                        <h5> {props.size} </h5>
                    </Grid>


                    <pr>  &#12288; &#12288; </pr>

                    <Grid item xs={1}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 34" label=""><g fill="none" fill-rule="evenodd" stroke="#2F3A4A" stroke-linecap="round" stroke-linejoin="round"><path d="M29 12.915V33H1V12.915l.035-.363L15 1l13.956 11.552z"></path><path fill="#C9F8EE" d="M23.59 24.474c-2.898-1.12-6.114-2.512-6.386-3.379v-.907c.603-.617 1.076-1.474 1.357-2.48.67-.469.846-1.444.285-2.136v-2.034c0-2.1-1.17-3.538-3.845-3.538-2.606 0-3.847 1.437-3.847 3.538v2.036a1.475 1.475 0 0 0 .285 2.135c.281 1.005.755 1.862 1.357 2.479v.907c-.269.866-3.488 2.258-6.386 3.38a.646.646 0 0 0-.41.602v2.275c0 .357.285.648.638.648h16.726a.643.643 0 0 0 .636-.648v-2.275a.644.644 0 0 0-.41-.603z"></path></g></svg>
                        <h5>  person  </h5>
                    </Grid>
                </Grid>
            </Box>




        </div>





    )

}




