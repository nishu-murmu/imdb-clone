import { LayoutProps } from "../../utils/types";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkIcon,
  TiktokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../media/Icons";
import useLocaleStorage from "../../utils/customHooks/useLocaleStorage";
import CommonLink from "../CommonComponents/CommonLink";
import { privacyLinks, siteLinks } from "../../utils/constants";

const Footer: React.FC<LayoutProps> = (props) => {
  const { getLocaleStorage } = useLocaleStorage();

  const socialLinks: any[] = [
    {
      icon: <FacebookIcon className="w-6 h-6" />,
      link: "https://www.facebook.com/tmdb.com/",
    },
    {
      icon: <InstagramIcon className="w-6 h-6" />,
      link: "https://www.instagram.com/tmdb.com/",
    },
    {
      icon: <TiktokIcon className="w-6 h-6" />,
      link: "https://www.tiktok.com/@tmdb",
    },
    {
      icon: <TwitterIcon className="w-6 h-6" />,
      link: "https://twitter.com/tmdb",
    },
    {
      icon: <YoutubeIcon className="w-6 h-6" />,
      link: "https://www.youtube.com/",
    },
  ];

  return (
    <div className="bg-black-nav text-white w-full pt-3">
      <div
        id="footer-section"
        className={`mt-4 w-full ${props.isSignInCover && "py-8"}`}
      >
        <div className="container mx-auto">
          {!getLocaleStorage("currentUser") && !props.isSignInCover && (
            <div className="justify-center flex">
              <Link to="/signinCover">
                <button className="bg-yellow-default text-black-default rounded-sm py-2 text-sm px-8 hover:bg-yellow-hover">
                  Sign in for more access
                </button>
              </Link>
            </div>
          )}
          <div className="pb-6 mt-5 justify-center flex">
            <ul className="flex gap-x-5 flex-row">
              {socialLinks.map((socialLink: any) => (
                <CommonLink
                  className="p-3 rounded-full hover:bg-black-nav-hover hover:cursor-pointer"
                  element={socialLink.icon}
                  href={socialLink.link}
                />
              ))}
            </ul>
          </div>
          <div id="imdb-sites" className="justify-center flex">
            <ul className="flex flex-row gap-x-2">
              {siteLinks.map((item: any) => (
                <CommonLink
                  className="p-2 hover:underline flex gap-x-1"
                  element={<LinkIcon />}
                  text={item.text}
                  href={item.link}
                />
              ))}
            </ul>
          </div>
          <div id="imdb-sites" className="justify-center flex">
            <ul className="flex flex-row gap-x-6">
              {privacyLinks.map((item: any) => (
                <CommonLink
                  className="p-2 hover:underline flex gap-x-1"
                  element={<LinkIcon />}
                  text={item.text}
                  href={item.link}
                />
              ))}
            </ul>
          </div>
          <div id="imdb-sites" className="justify-center flex mt-4">
            An Amazon Company
          </div>
          <div
            id="imdb-sites"
            className="justify-center flex pb-14 text-sm text-gray-300"
          >
            © 1990-{new Date().getFullYear()} by IMDb.com, Inc.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
