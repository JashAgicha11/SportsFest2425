import { create } from "zustand";
import { devtools } from "zustand/middleware";

const Store = (set)  =>({
 selected :"",
 selectedClan: "",
 toastrMsg: "",
 setToastr: (toastrMsg) => set({ toastrMsg }, false, "setToastr"),
 setClan: (clan) => set({ selectedClan: clan }),
 setSelected:(selected) => set({selected},false,"setSelected")
});

const useStore = create(devtools(Store));
export default useStore;
  