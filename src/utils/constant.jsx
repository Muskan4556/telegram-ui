import { CiBookmark } from "react-icons/ci";
import { PiCircleDashedLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { GoGear, GoMoon, GoBug } from "react-icons/go";
import { MdAnimation } from "react-icons/md";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { TbLetterA } from "react-icons/tb";
import { CiCirclePlus } from "react-icons/ci";

export const bg =
  "https://blog.1a23.com/wp-content/uploads/sites/2/2020/02/Desktop.webp";

export const allChatInfoUrl =
  "https://devapi.beyondchats.com/api/get_all_chats?page=";

export const profileUrl = "https://images.unsplash.com/photo-1549743076-d455c56dd386?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export const bgLightMode = "https://w0.peakpx.com/wallpaper/220/854/HD-wallpaper-whatsapp-black-abstract-abstract-digital-abstraction-abstracts-background-digital-pattern-texture.jpg"

export const bgDarkMode = "https://w0.peakpx.com/wallpaper/623/156/HD-wallpaper-whatsapp-abstract-abstract-digital-abstraction-abstracts-background-black-blue-digital-pattern-sparkle.jpg"

export const logoUrl = "https://image.similarpng.com/very-thumbnail/2021/01/Telegram-icon-on-transparent-background-PNG.png"

export const menuItems = [
  { Icon: CiBookmark, label: "Saved Messages" },
  { Icon: PiCircleDashedLight, label: "My Stories" },
  { Icon: CiUser, label: "Contact" },
  { Icon: GoGear, label: "Settings" },
  { Icon: GoMoon, label: "Dark Mode", isToggle: true, hideOnMobile: true },
  {
    Icon: MdAnimation,
    label: "Animations",
    isToggle: true,
    hideOnMobile: true,
  },
  { Icon: RxQuestionMarkCircled, label: "Telegram Features" },
  { Icon: GoBug, label: "Report Bug" },
  { Icon: TbLetterA, label: "Switch to A version" },
  { Icon: CiCirclePlus, label: "Install app" },
];
