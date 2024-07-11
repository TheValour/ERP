import React, { useEffect, useState } from "react";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { useDispatch, useSelector } from "react-redux";
import { createNotice } from "../../../redux/actions/adminActions";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Spinner from "../../../utils/Spinner";
import * as classes from "../../../utils/styles";
import { CREATE_NOTICE, SET_ERRORS } from "../../../redux/actionTypes";

const Body = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const departments = useSelector((state) => state.admin.allDepartment);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [value, setValue] = useState({
    date: "",
    noticeFor: "",
    topic: "",
    content: "",
    from: "",
  });

  useEffect(() => {
    if (Object.keys(store.errors).length !== 0) {
      setError(store.errors);
      setValue({ date: "", noticeFor: "", topic: "", content: "", from: "" });
    }
  }, [store.errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({});
    setLoading(true);
    dispatch(createNotice(value));
  };

  useEffect(() => {
    if (store.errors || store.admin.noticeCreated) {
      setLoading(false);
      if (store.admin.noticeCreated) {
        setValue({
          date: "",
          noticeFor: "",
          topic: "",
          content: "",
          from: "",
        });
        dispatch({ type: CREATE_NOTICE, payload: false });
        dispatch({ type: SET_ERRORS, payload: {} });
      }
    } else {
      setLoading(true);
    }
  }, [store.errors, store.admin.noticeCreated]);

  useEffect(() => {
    dispatch({ type: SET_ERRORS, payload: {} });
  }, []);

  return (
    <div className="flex-[0.8]">
      <div className="space-y-6 ml-6">
        <div className="flex text-gray-500 items-center px-5">
          <NoteAltIcon />
          <h1 className="ml-2">Create Notice</h1>
        </div>
        <div className="mr-6 bg-white flex flex-col rounded-xl ">
          <form className="FLEX flex-col" onSubmit={handleSubmit}>
            <div className={classes.adminForm1}>
              <div className={classes.adminForm2l}>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Date :</h1>

                  <input
                    placeholder="Date"
                    required
                    className={classes.adminInput}
                    type="date"
                    value={value.date}
                    onChange={(e) =>
                      setValue({ ...value, date: e.target.value })
                    }
                  />
                </div>

                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Heading :</h1>

                  <input
                    required
                    placeholder="Heading"
                    className={classes.adminInput}
                    type="text"
                    value={value.topic}
                    onChange={(e) =>
                      setValue({ ...value, topic: e.target.value })
                    }
                  />
                </div>

                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>To :</h1>
                  <Select
                    required
                    displayEmpty
                    sx={{ height: 36 }}
                    inputProps={{ "aria-label": "Without label" }}
                    value={value.noticeFor}
                    onChange={(e) =>
                      setValue({ ...value, noticeFor: e.target.value })
                    }>
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="faculty">Faculty</MenuItem>
                    <MenuItem value="student">Student</MenuItem>
                  </Select>
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>From :</h1>

                  <input
                    required
                    placeholder="From"
                    className={classes.adminInput}
                    type="text"
                    value={value.from}
                    onChange={(e) =>
                      setValue({ ...value, from: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className={classes.adminForm2r}>
                <div className={classes.adminForm3}>
                  <h1 className={`self-start  ${classes.adminLabel} w-40`}>
                    Notice :
                  </h1>

                  <textarea
                    rows={10}
                    cols={40}
                    required
                    placeholder="Notice...."
                    className={classes.adminInput}
                    value={value.content}
                    onChange={(e) =>
                      setValue({ ...value, content: e.target.value })
                    }
                  />
                </div>
                <div className={classes.adminForm3}></div>
              </div>
            </div>
            <div className={classes.adminFormButton}>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md" type="submit">
                Submit
              </button>
              <button
                onClick={() => {
                  setValue({
                    date: "",
                    noticeFor: "",
                    topic: "",
                    content: "",
                    from: "",
                  });
                  setError({});
                }}
                className="bg-red-500 text-white px-3 py-1 rounded-md"
                type="button">
                Clear
              </button>
            </div>
            <div className={classes.loadingAndError}>
              {loading && (
                <Spinner
                  message="Creating Notice"
                  height={30}
                  width={150}
                  color="#111111"
                  messageColor="blue"
                />
              )}
              {(error.noticeError || error.backendError) && (
                <p className="text-red-500">
                  {error.noticeError || error.backendError}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Body;
