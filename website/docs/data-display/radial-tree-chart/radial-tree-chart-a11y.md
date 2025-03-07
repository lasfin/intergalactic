---
title: Radial Tree chart
fileSource: d3-chart
a11y: AA
tabs: Design('radial-tree-chart'), API('radial-tree-chart-api'), A11y('radial-tree-chart-a11y'), Examples('radial-tree-chart-d3-examples'), Changelog('d3-chart-changelog')
---

Radial tree chart is accessible for screen readers. Refer to [Accessibility section in D3 chart documentation](/data-display/d3-chart/d3-chart-a11y) to know more. If you are making your radial tree interactive, make sure that chart isn’t the only way to accomplish user scenario. For example, provide `<Select />` to allow user to pick the radians.

::: sandbox

<script lang="tsx">
import React from 'react';
import { Plot, RadialTree } from '@semcore/ui/d3-chart';
import { scaleLinear } from 'd3-scale';
import LikeM from '@semcore/ui/icon/Like/m';
import { Flex } from '@semcore/ui/flex-box';
import Select from '@semcore/ui/select';

const movies = [
  { label: 'Action', key: 'action', color: '#008ff8' },
  { label: 'Comedy', key: 'comedy', color: '#008ff8' },
  { label: 'Drama', key: 'drama', color: '#008ff8' },
  { label: 'Fantasy', key: 'fantasy', color: '#008ff8' },
  { label: 'Mystery', key: 'mystery', color: '#008ff8' },
  { label: 'Romance', key: 'romance', color: '#008ff8' },
  { label: 'Western', key: 'western', color: '#008ff8' },
  { label: 'Thriller', key: 'thriller', color: '#007C65' },
  { label: 'Crime Thriller', key: 'crime_thriller', color: '#007C65' },
  { label: 'Disaster Thriller', key: 'disaster_thriller', color: '#007C65' },
  { label: 'Psychological\nThriller', key: 'psychological_hriller', color: '#007C65' },
  { label: 'Techno Thriller', key: 'techo_thriller', color: '#007C65' },
  { label: 'Horror', key: 'horror', color: '#ff4953' },
  { label: 'Zombie Horror', key: 'zoombie_orror', color: '#ff4953' },
  { label: 'Folk Horror', key: 'folk_orror', color: '#ff4953' },
  { label: 'Body Horror', key: 'body_horror', color: '#ff4953' },
  { label: 'Found\nFootage Horror', key: '\nFootage Horror', color: '#ff4953' },
];

const Demo = () => {
  const width = 500;
  const height = 500;
  const [genre, setGenre] = React.useState<string | null>(movies[0].key);

  return (
    <Flex direction='column'>
      <p>Movie of what genre to pick today?</p>
      <Select
        options={movies.map(({ label, key }) => ({ value: key, children: label }))}
        value={genre}
        onChange={setGenre}
      />
      <Plot data={movies} scale={[scaleLinear(), scaleLinear()]} width={width} height={height}>
        <RadialTree activeKey={genre} onActiveKeyChange={setGenre}>
          <RadialTree.Radian>
            <RadialTree.Radian.Label />
            <RadialTree.Radian.Line />
            <RadialTree.Radian.Cap />
            <RadialTree.Radian.Icon tag={LikeM} />
          </RadialTree.Radian>
          <RadialTree.Title>Movies</RadialTree.Title>
        </RadialTree>
      </Plot>
    </Flex>
  );
};
</script>

:::
