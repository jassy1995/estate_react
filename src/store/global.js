import create from "zustand";

const useGlobalStore = create((set) => ({
  data: {
    location:"Location (any)",
    type: "Property type (any)",
    price: "Price range (any)",
    isFilter:false,
    property_admin: localStorage.getItem("property_admin")
      ? JSON.parse(localStorage.getItem("property_admin"))
      : null,
  },
    updateFilterParam: ({location,type,price,isFilter}) =>
    set((state) => ({
      ...state,
      data: { ...state.data, location,type,price,isFilter },
    })),

  SIGNIN: (payload) =>
    set((state) => ({
      ...state,
      data: { ...state.data, property_admin: payload },
    })),

  SIGNOUT: () =>
    set((state) => ({
      ...state,
      data: { ...state.data, property_admin: null },
    })),
}));

export default useGlobalStore;
