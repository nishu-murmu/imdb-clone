import { LayoutProps } from "../../utils/types";


const CommonLink = ({element, className, href, text}: LayoutProps): JSX.Element => {
    return (
      <li className={className}>
        <a target="_blank" href={href}>{text}</a>
        {element}
      </li>
    );
}
export default CommonLink