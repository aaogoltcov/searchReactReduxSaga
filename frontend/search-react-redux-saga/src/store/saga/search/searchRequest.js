import { call, put } from "redux-saga/effects";

export function* searchRequest(action) {
  try {
    if (action.payload !== "") {
      // Показывает загрузку
      const formIsLoading = true;
      yield put({ type: "setFormLoading", formIsLoading });

      // Запрашивает результаты поиска
      const searchRequest = yield call(ajaxSearchRequest, action);
      if (searchRequest) {
        yield put({ type: "setSearchResult", searchRequest });

        // Показывает завершение загрузки
        const formIsLoading = false;
        const formIsLoadingError = false;
        yield put({ type: "setFormLoading", formIsLoading });
        yield put({ type: "setFormLoadingError", formIsLoadingError });
      }
    }
  } catch (e) {
    // Показывает ошибку загрузки результатов поиска
    const formIsLoadingError = true;
    yield put({ type: "setFormLoadingError", formIsLoadingError });
  }
}

function ajaxSearchRequest(action) {
  const searchString = new URLSearchParams({ q: action.payload });
  return fetch(`http://localhost:7070/api/search?${searchString}`)
    .then((response) => {
      if (response.ok) {
        const result = response.json();
        return result;
      } else {
        console.log("Что-то пошло не так, делаю запрос снова...");
        return ajaxSearchRequest(action);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
