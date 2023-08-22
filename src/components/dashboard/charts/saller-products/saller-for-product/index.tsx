import { Box, LinearProgress, Skeleton, Typography } from "@mui/material";
import { format } from "date-fns";
import React from "react";
import { DashboardChartCard } from "../../elements/card";
import { TDashboardChart } from "../types";
// @ts-ignore
import faker from "faker";
import { DashboardPieChart } from "../../elements/pie";
export const GraficSallerForProduct = ({ title, dataset }: TDashboardChart) => {
  // const {
  //     isError,
  //     isFetching,
  //     isLoading,
  //     data,
  //     fulfilledTimeStamp,
  //     startedTimeStamp,
  // } = useBuscaConsultasPorAtendenteQuery({
  //     idAtendente: selectValue,
  //     dataInicial: format(new Date(), 'yyyy-MM-dd'),
  //     dataFinal: format(new Date(), 'yyyy-MM-dd'),
  // })

  const FetchingTimestamp = React.useCallback(() => {
    // let diff
    // if (fulfilledTimeStamp && startedTimeStamp) {
    //     diff =
    //         new Date(fulfilledTimeStamp).getTime() -
    //         new Date(startedTimeStamp).getTime()
    // }
    const diff = new Date().getTime() - new Date().getTime();
    return (
      <Typography sx={{ pb: 0 }} mb={0} paragraph variant="caption" color="text.secondary" textAlign="right">
        {diff ? `Pesquisa realizada em ${(diff / 1000).toFixed(3)} segundos` : "Carregando dados..."}
      </Typography>
    );
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const MountedChart = React.useCallback(() => {
    if (options) {
      const options = {
        labels: ["Air max 97", "Mizuno", "all stars", "vans", "adidas", "new balace"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };

      return <DashboardPieChart data={options} />;
    }
    return (
      <Box
        height={200}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          color: "text.secondary",
        }}
      >
        <Typography variant="h5" fontWeight={500} gutterBottom>
          Sem resultados!
        </Typography>
        <Typography paragraph align="center">
          Nenhum resultado foi encontrado no intervalo de tempo fornecido
        </Typography>
      </Box>
    );
  }, []);

  const isLoading = false;
  if (isLoading) {
    return <Skeleton variant="rounded" height={270} />;
  }
  const isError = false;
  if (isError) {
    return (
      <Box
        height={200}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          color: "text.secondary",
        }}
      >
        <Typography variant="h5" fontWeight={500} gutterBottom>
          Oops!
        </Typography>
        <Typography paragraph align="center">
          Ocorreu um erro ao gerar este gráfico.
          <br /> Tente novamente mais tarde.
        </Typography>
      </Box>
    );
  }
  const isFetching = false;
  return (
    <DashboardChartCard title={title}>
      {!isLoading && isFetching && (
        <LinearProgress sx={{ position: "absolute", left: 0, width: "100%", top: "-1px" }} />
      )}
      <MountedChart />
      <FetchingTimestamp />
    </DashboardChartCard>
  );
};
