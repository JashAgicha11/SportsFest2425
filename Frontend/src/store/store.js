import { create } from "zustand";
import { devtools } from "zustand/middleware";

const Store = (set)  =>({
 selected :"",
 selectedClan: "",
 toastrMsg: "",
 isAdminLogin: false,
 setToastr: (toastrMsg) => set({ toastrMsg }, false, "setToastr"),
 setClan: (clan) => set({ selectedClan: clan }),
 setSelected:(selected) => set({selected},false,"setSelected"),
 setisAdminLogin:(state) => set({isAdminLogin : state},false,"setisAdminLogin")
});

const useStore = create(devtools(Store));
export default useStore;
  