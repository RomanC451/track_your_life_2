/**
 * Description: Converts an object with useRef into a normal object used in a fetch request as request body.
 * @param {Object<string, Object<string, any>>} refsObject - The object that contains the useRefs
 * @returns {Object<string, any>} Returns a normal object used in a fetch request as request body.
 */

function refsObjectToFetchBody(refsObject) {
  if (typeof refsObject !== "object") {
    throw new TypeError("the argument `refsObject` must be an object");
  }

  const fetchBody = {};
  Object.keys(refsObject).forEach((key) => {
    if (!refsObject[key].hasOwnProperty("current")) {
      throw new TypeError(
        "the argument `refsObject` must have only useRefs components."
      );
    }
    fetchBody[key] = refsObject[key].current;
  });

  return fetchBody;
}

export default refsObjectToFetchBody;
