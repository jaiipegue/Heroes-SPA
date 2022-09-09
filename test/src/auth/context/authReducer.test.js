import { authReducer } from "../../../../src/auth/context/authReducer";
import { types } from "../../../../src/auth/types/types";

describe("Pruebas en  authReducer.js", () => {
  const initialStateLogout = {
    logged: false,
    user: "",
  };
  const initialStateLogged = {
    logged: true,
    user: "Jairo Perez",
  };

  test("Debe de retornar el estado por defecto", () => {
    const newState = authReducer(initialStateLogout, {});
    expect(newState).toBe(initialStateLogout);
  });

  test("Debe de (login) llamar el login autenticar y establecer el user", () => {
    const action = {
      type: types.login,
      payload: "Jairo Perez",
    };

    const newState = authReducer(initialStateLogout, action);

    expect(newState.logged).toBeTruthy();
    expect(newState.user).toContain(action.payload);
  });

  test("Debe de (logout) borrar el name del usuario y logged en false", () => {
    const action = {
      type: types.logout,
    };

    const newState = authReducer(initialStateLogged, action);

    expect(newState.logged).toBeFalsy();
    expect(newState.user).toBeUndefined();
  });
});
