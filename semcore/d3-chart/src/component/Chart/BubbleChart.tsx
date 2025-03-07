import React from 'react';
import createComponent from '@semcore/core';
import { scaleLinear, ScaleLinear, ScalePower } from 'd3-scale';
// @ts-ignore
import { Bubble, getBubbleChartValueScale } from '../..';
import { AbstractChart } from './AbstractChart';
import {
  BubbleChartData,
  BubbleChartProps,
  BubbleChartType,
  ScaledValues,
} from './BubbleChart.type';
import { Text } from '@semcore/typography';
import { LegendItem } from '../ChartLegend/LegendItem/LegendItem.type';

class BubbleChartComponent extends AbstractChart<BubbleChartData, BubbleChartProps> {
  static displayName = 'Chart.Bubble';

  protected get dataKeys(): string[] {
    const { data } = this.props;

    return data.map((_, index) => index.toString());
  }

  get defaultDataDefinitions(): Array<LegendItem & { columns: React.ReactNode[] }> {
    const { legendProps, data } = this.props;

    return data.map((item, index) => {
      const key = index.toString();
      const legendData = legendProps?.legendMap?.[key];

      if (item.color === undefined) {
        item.color = this.resolveColor(key, index);
      }

      const dataDefinition: LegendItem & { columns: React.ReactNode[] } = {
        id: key,
        label: legendData?.label ?? item.label ?? key,
        icon: legendData?.icon ?? undefined,
        checked: legendData?.defaultChecked ?? true,
        color: item.color,
        columns: [],
      };

      if (legendData?.additionalInfo || legendData?.count) {
        dataDefinition.additionalInfo = legendData.additionalInfo
          ? { label: legendData.additionalInfo }
          : legendData.count
          ? { count: legendData.count }
          : undefined;
      }

      return dataDefinition;
    });
  }

  get valueScale(): ScalePower<number, number> {
    const { data } = this.asProps;

    return getBubbleChartValueScale(data, 'value');
  }

  get scaledValues(): ScaledValues {
    const { data, plotWidth, plotHeight } = this.asProps;
    const values: ScaledValues = { x: [], y: [] };

    const xValueScale = (plotWidth / plotHeight) * this.getValueScale(data.map((d) => d.x));
    const yValueScale = (plotHeight / plotWidth) * this.getValueScale(data.map((d) => d.y));

    data.forEach((item) => {
      const x = item.x;
      const y = item.y;
      const scaledValue = this.valueScale(item.value);

      values.x.push(x - scaledValue / xValueScale);
      values.x.push(x + scaledValue / xValueScale);
      values.y.push(y - scaledValue / yValueScale);
      values.y.push(y + scaledValue / yValueScale);
    });

    return values;
  }

  get xScale() {
    const { xScale, marginY = 30, plotWidth, data, groupKey } = this.asProps;

    if (xScale) {
      return xScale;
    }

    const range = [marginY, plotWidth - this.plotPadding];

    return scaleLinear([Math.min(...this.scaledValues.x), Math.max(...this.scaledValues.x)], range);
  }

  get yScale(): ScaleLinear<any, any> {
    const { yScale, marginX = 30, plotHeight, data } = this.asProps;

    if (yScale) {
      return yScale;
    }

    const range = [plotHeight - marginX, this.plotPadding];

    return scaleLinear([Math.min(...this.scaledValues.y), Math.max(...this.scaledValues.y)], range);
  }

  defaultLegendProps() {
    return {
      shape: 'Circle' as const,
    };
  }

  renderChart() {
    return <Bubble x='x' y='y' value='value' color={'color'} label={'label'} />;
  }

  renderTooltip() {
    const { showTooltip } = this.asProps;

    if (!showTooltip) {
      return null;
    }

    return (
      <Bubble.Tooltip>
        {({ index, data }: any) => {
          return {
            children: (
              <>
                <Bubble.Tooltip.Title>Data</Bubble.Tooltip.Title>
                <Text tag='div'>X axis {data[index].x}</Text>
                <Text tag='div'>Y axis {data[index].y}</Text>
                <Text tag='div'>Value {data[index].value}</Text>
              </>
            ),
          };
        }}
      </Bubble.Tooltip>
    );
  }
}

export const BubbleChart: BubbleChartType = createComponent(BubbleChartComponent);
