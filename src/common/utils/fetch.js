import ajax from 'packing-ajax';

const fetch = ({
  url,
  data,
  type = 'GET',
  dataType = 'JSON',
  contentType = 'application/json',
  ...rest
}) => new Promise((resolve, reject = () => {}) => {
  ajax({
    url,
    data,
    type,
    dataType,
    contentType,
    ...rest,
    success: (res) => {
      resolve(res);
    },
    error: (err) => {
      reject(err);
    }
  });
});

export default fetch;
