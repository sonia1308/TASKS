import {
    IconButton,
  } from "@material-tailwind/react";
 
function TrashIcon({ onClick }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        onClick={onClick}
      >
        <path
          fillRule="evenodd"
          d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  
export const TrashhIcon = ({ onClick }) => {
    return (
        <IconButton variant="text" color="blue-gray" onClick={onClick}>
            <TrashIcon />
        </IconButton>
    )
}

  function EditIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M16.862 3.879a3 3 0 014.242 4.242l-1.469 1.47a.75.75 0 01-1.06 0l-6.72-6.72a.75.75 0 010-1.06l1.47-1.47a3 3 0 014.242 0zm-2.53 2.53L5.868 14.874a4 4 0 00-1.06 1.768l-1.472 5.891a.75.75 0 00.926.926l5.891-1.472a4 4 0 001.768-1.06l8.465-8.465a.75.75 0 00-1.06-1.06l-8.466 8.466a2.5 2.5 0 01-1.1.67l-4.418 1.104 1.104-4.418a2.5 2.5 0 01.67-1.1l8.465-8.466a.75.75 0 00-1.06-1.06z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  

  export const EdittIcon = () => {
    return (
        <IconButton variant="text" color="blue-gray">
        <EditIcon />
      </IconButton>
    )
  }
