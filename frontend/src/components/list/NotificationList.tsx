import NotificationNote from "../textArea/NotificationNote";

type Props = {
  items?: Array<string>;
  children?: React.ReactNode;
};

const NotificationList: React.FC<Props> = ({ items, children }) => {
  if (items) {
    return (
      <>
        {items?.map((item, index) => {
          return <NotificationNote key={index}>{item}</NotificationNote>;
        })}
      </>
    );
  } else {
    <NotificationNote>{children}</NotificationNote>;
  }
};

export default NotificationList;
