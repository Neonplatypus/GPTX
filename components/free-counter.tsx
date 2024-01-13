import { Zap } from "lucide-react";
import { useEffect, useState } from "react";

import { MAX_FREE_COUNTS } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useProModal } from "@/hooks/use-pro-modal";

export const FreeCounter = ({
  isPro = false,
  apiLimitCount = 0,
}: {
  isPro: boolean,
  apiLimitCount: number
}) => {
  const [mounted, setMounted] = useState(false);
  const proModal = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (isPro) {
    return null;
  }

  return (
    <div className="px-3">
      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardContent className="py-6">
          <div className="text-center text-sm font-semibold text-gray-800 mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress className="h-3 bg-gradient-to-r from-teal-500 to-indigo-500" value={(apiLimitCount / MAX_FREE_COUNTS) * 100} />
          </div>
          <Button onClick={proModal.onOpen} variant="premium" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg">
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-current" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
