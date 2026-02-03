export const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="relative flex flex-col items-center">
        <div className="w-3 h-3 rounded-full border-2 border-primary mb-1" />
        <div className="bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex flex-col items-center gap-1">
          <span className="text-xs text-muted-foreground font-medium">
            19-25
          </span>
          <span className="text-lg font-bold">
            {payload[0].value.toLocaleString("ru-RU")} ₽
          </span>
        </div>
      </div>
    );
  }
  return null;
};
