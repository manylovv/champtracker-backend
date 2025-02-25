import { Link } from "@tanstack/react-router";
import { BarsIcon } from "@/icons/Bars";
import PremiumFeatures from "../ui/PremiumFeatures";
import TokenIcon from "@/icons/TokenIcon";
import { useTokens } from "@/hooks/useTokens";
import { useUser } from "@/hooks/useUser";
import { isPremium } from "@/lib/challengeUtills";
import { BuyPremium } from "../BuyPremium";
import { Button } from "../ui/button";
import { TelegramStar } from "../shared/TelegramStar";

const Header = () => {
  const { user } = useUser();

  return (
    <div className="fixed z-10 flex w-full justify-between h-[11vh] bg-black p-3 pt-14">
      <Link to="/about">
        <BarsIcon />
      </Link>
      <div className="flex items-center gap-2">
        {isPremium(user) ? (
          <PremiumFeatures>
            <div className="flex text-sm items-center gap-2 text-black rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-orange-500 py-1 px-2 font-medium hover:opacity-90">
              <div className="flex items-center gap-1 font-druk">
                <span>{user.tokens}</span>
                <TokenIcon />
              </div>
            </div>
          </PremiumFeatures>
        ) : (
          <BuyPremium>
            <Button
              variant="ghost"
              className="font-druk text-[10px] items-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-orange-500  font-medium text-black hover:opacity-90">
              <span>ПРЕМИУМ</span>
              <TelegramStar />
            </Button>
          </BuyPremium>
        )}
      </div>
    </div>
  );
};

export default Header;
