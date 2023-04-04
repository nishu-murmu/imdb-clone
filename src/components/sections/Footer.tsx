import { LayoutProps } from "../../utils/types";
import { Link } from "react-router-dom";
import React from "react";
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

const Footer: React.FC<LayoutProps> = (props) => {
  const { getLocaleStorage } = useLocaleStorage();

  const siteLinks = [
    {
      text: "Get TMDb App",
      link: "https://apps.apple.com/us/app/id342792525?_branch_match_id=1171716963288816844&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL86pTNJLLCjQy8nMy9YP9k6pDDRzNDGxBABVqlN1IAAAAA%3D%3D&utm_campaign=mdot%20sitewide%20footer%20Branch%20update&utm_medium=marketing&utm_source=IMDb%20Mdot",
    },
    {
      text: "Help",
      link: "https://help.imdb.com/imdb",
    },
    {
      text: "Site Index",
      link: "https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so",
    },
    {
      text: "IMDb Pro",
      link: "https://pro.imdb.com/signup/index.html?rf=cons_tf_pro&u=http%3A%2F%2Fpro.imdb.com%2F%3Fref_%3Dcons_tf_pro%26rf%3Dcons_tf_pro",
    },
    { link: "https://www.boxofficemojo.com/", text: "Box Office Mojo" },
    {
      text: "Box Office Mojo",
      link: "https://www.boxofficemojo.com/",
    },
    {
      text: "IMDb Developer",
      link: "https://developer.imdb.com/",
    },
  ];
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
  const privacyLinks = [
    {
      text: "Press Room",
      link: "https://www.imdb.com/pressroom/?ref_=ft_pr",
    },
    {
      text: "Advertising",
      link: "https://advertising.amazon.com/resources/ad-specs/imdb/",
    },
    {
      text: "Jobs",
      link: "https://www.amazon.jobs/en/teams/imdb",
    },
    {
      text: "Condition of Users",
      link: "https://www.imdb.com/conditions?ref_=ft_cou",
    },
    {
      text: "Privacy Policy",
      link: "https://www.imdb.com/privacy?ref_=ft_pvc",
    },
    {
      text: "Your Add Privacy Policy",
      link: "https://www.imdb.com/privacy/adpreferences/",
    },
  ];
  return (
    <div className="bg-black-nav text-white w-full pt-3">
      <div
        id="footer-section"
        className={`mt-4 w-full ${props.isSignInCover && "py-8"}`}
      >
        <div className="container mx-auto">
          {!props.isSignInCover ||
            (getLocaleStorage("currentUser") && (
              <div className="justify-center flex">
                <Link to="/signinCover">
                  <button className="bg-yellow-default text-black-default rounded-sm py-2 text-sm px-8 hover:bg-yellow-hover">
                    Sign in for more access
                  </button>
                </Link>
              </div>
            ))}
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
