import request from "superagent";

export const loadEventsFromDb = () => {
  return (dispatch, getState) => {
    const eventsFromDb = getState().dbEvents;
    if (eventsFromDb.length > 0) return;

    request.get("http://localhost:4000")
    .then(response => {
      console.log(response.body)
      dispatch({
        type: "LOAD_EVENTS_FROM_DB",
        event: response.body
      });
    });
  };
};

