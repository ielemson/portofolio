import React, { Fragment } from "react";
import { HeaderPartial, AsidePartial, Footer } from "../../partials";
const BlogDetails = () => {
  return (
    <Fragment>
      <HeaderPartial />

      <div className="content-wrapper">
        <AsidePartial />

        <main>
          <section class="blog-section">
            {/* <h2 class="section-title">LATEST NEWS</h2> */}

            <div class="container">
              <div class="row">
                <div class="col-lg-8">
                  <h1 class="mt-4">Post Title</h1>

                  <p class="lead">
                    by
                    <a href="#">Start Bootstrap</a>
                  </p>
                  <hr />
                  <p>Posted on January 1, 2019 at 12:00 PM</p>
                  <hr />
                  <img
                    class="img-fluid rounded"
                    src="http://placehold.it/900x300"
                    alt=""
                  />
                  <hr />
                  <p class="lead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus, vero, obcaecati, aut, error quam sapiente nemo
                    saepe quibusdam sit excepturi nam quia corporis eligendi eos
                    magni recusandae laborum minus inventore?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ut, tenetur natus doloremque laborum quos iste ipsum rerum
                    obcaecati impedit odit illo dolorum ab tempora nihil dicta
                    earum fugiat. Temporibus, voluptatibus.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos, doloribus, dolorem iusto blanditiis unde eius illum
                    consequuntur neque dicta incidunt ullam ea hic porro optio
                    ratione repellat perspiciatis. Enim, iure!
                  </p>

                  <blockquote class="blockquote">
                    <p class="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer class="blockquote-footer">
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error, nostrum, aliquid, animi, ut quas placeat totam sunt
                    tempora commodi nihil ullam alias modi dicta saepe minima ab
                    quo voluptatem obcaecati?
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur
                    ratione tempore quidem voluptates cupiditate voluptas illo
                    saepe quaerat numquam recusandae? Qui, necessitatibus, est!
                  </p>

                  <hr />

                  <div class="card my-4">
                    <h5 class="card-header">Leave a Comment:</h5>
                    <div class="card-body">
                      <form>
                        <div class="form-group">
                          <textarea class="form-control" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* 
                  <div class="media mb-4">
                    <img
                      class="d-flex mr-3 rounded-circle"
                      src="http://placehold.it/50x50"
                      alt=""
                    />
                    <div class="media-body">
                      <h5 class="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>

                  */}
                </div>

                <div class="col-md-4">
                  <div class="card my-4">
                    <h5 class="card-header">Search</h5>
                    <div class="card-body">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search for..."
                        />
                        <span class="input-group-btn">
                          <button class="btn btn-secondary" type="button">
                            Go!
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="card my-4">
                    <h5 class="card-header">Categories</h5>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-6">
                          <ul class="list-unstyled mb-0">
                            <li>
                              <a href="#">Web Design</a>
                            </li>
                            <li>
                              <a href="#">HTML</a>
                            </li>
                            <li>
                              <a href="#">Freebies</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-6">
                          <ul class="list-unstyled mb-0">
                            <li>
                              <a href="#">JavaScript</a>
                            </li>
                            <li>
                              <a href="#">CSS</a>
                            </li>
                            <li>
                              <a href="#">Tutorials</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card my-4">
                    <h5 class="card-header">Side Widget</h5>
                    <div class="card-body">
                      You can put anything you want inside of these side
                      widgets. They are easy to use, and feature the new
                      Bootstrap 4 card containers!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </Fragment>
  );
};

export default BlogDetails;
