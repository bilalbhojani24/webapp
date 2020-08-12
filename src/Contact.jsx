import React from "react";

function Contact() {
  return (
    <>
      <div className="col-12 col-md-8 mx-auto my-5">
        <form>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="form6Example1"
                  className="form-control"
                />
                <label className="form-label" for="form6Example1">
                  First name
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="form6Example2"
                  className="form-control"
                />
                <label className="form-label" for="form6Example2">
                  Last name
                </label>
              </div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <input type="email" id="form6Example5" className="form-control" />
            <label className="form-label" for="form6Example5">
              Email
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="number" id="form6Example6" className="form-control" />
            <label className="form-label" for="form6Example6">
              Phone
            </label>
          </div>

          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              id="form6Example7"
              rows="4"
            ></textarea>
            <label className="form-label" for="form6Example7">
              Message
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
