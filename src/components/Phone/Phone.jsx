import React from 'react'
import { Col, Row } from 'reactstrap';

function Phone() {
  return (
    <>
        <Row style={{"height":"50px", "backgroundColor":"rgb(75, 164, 241)"}}>
            <Col lg="6"></Col>
            <Col lg="6">
                <div className='d-flex gap-4 ml-5'>
                    <h6 style={{"marginTop":"0.75rem"}}>
                        <svg style={{"marginTop":"-0.3rem"}} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        {" "}Address | <span style={{"color":"white"}}>06, Rue d'Egypte Lafayette-1002 Tunis</span>
                    </h6>
                    <h6 style={{"marginTop":"0.75rem"}}>
                    <svg style={{"marginTop":"-0.3rem"}} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>{"  "}
                    {" "}Phone | <span style={{"color":"white"}}>+216 21 151 334</span></h6>
                    <a style={{"marginTop":"0.5rem","cursor":"pointer"}} href="https://www.facebook.com/profile.php?id=100076367562761" >
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                    </a>
                </div>
            </Col>
        </Row>
    </>
  )
}

export default Phone