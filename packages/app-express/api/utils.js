exports.fork = (res, code, m) =>
  m.fork(
    (error) => {
      if (error.status) {
        return res.status(error.status).send(error.message)
      } 
      res.status(500).send(error)
    },
    (result) => res.status(code).send(result)
  );
