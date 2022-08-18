import React, { useEffect, useState } from "react";

const template = () => {
  const [user, setUser] = useState({});

  //problem: if we click user2 then quickly click user3, it will still show user2 first
  //because it's not cancelling the request
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, [id]);

  //solution:
  useEffect(() => {
    let unsubscribed = false;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!unsubscribed) {
          setUser(data);
        }
      });

    return () => {
      console.log("cancelled!");
      unsubscribed = true;
    };
  }, [id]);

  //more professional solution:
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("cancelled!");
        } else {
          //todo:handle error
        }
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  //axios solution:
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`, {
        cancelToken: cancelToken.token,
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("cancelled!");
        } else {
          //todo:handle error
        }
      });

    return () => {
      cancelToken.cancel();
    };
  }, [id]);

  //react strict mode:
  //the strict will cause the component to render twice
  //dont worry about it, the actual web won't do that
  useEffect(() => {
    console.log("useEffect mounts");
    const cancelToken = axios.CancelToken.source();

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`, {
        cancelToken: cancelToken.token,
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("cancelled!");
        } else {
          //todo:handle error
        }
      });

    return () => {
      console.log("useEffect unmounts");
      cancelToken.cancel();
    };
  }, [id]);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <Link to="/user/1">Fetch User 1</Link>
      <Link to="/user/2">Fetch User 2</Link>
      <Link to="/user/3">Fetch User 3</Link>
    </div>
  );
};

export default template;
