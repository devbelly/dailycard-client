import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

import TagTabs from "../components/tag/TagTabs";
import { useTags } from "../components/tag/hooks/useTags";

import { useCard } from "../components/tag/hooks/useCard";
import TagTabItem from "../components/tag/TagTabItem";

import CreateTag from "../components/tag/CreateTag";
import { usePrefetchTemplates } from "../components/template/hooks/useTemplates";
import { Grid } from "@mui/material";

/**
 * TODO: useTag에 의존하는 useCard. tags[value].id 를 처음 랜더링 시 못읽어오는 문제를 어떻게 해결해야하나
 */

const useStyles = makeStyles((theme) => ({
  main: {
    height: "100vh",
  },
}));

const Tag = () => {
  usePrefetchTemplates();
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const tags = useTags();
  const cards = useCard(tags.length === 0 ? 0 : tags[value].id);
  return (
    <div>
      <div className={classes.main}>
        <TagTabs value={value} setValue={setValue} tags={tags} />
        <Grid container justifyContent="center">
          <Grid container justifyContent="center">
            <TagTabItem
              cards={cards}
              id={tags.length === 0 ? 0 : tags[value].id}
            />
          </Grid>
        </Grid>
      </div>
      <CreateTag />
      {/* <UpdateTagFab id={tags.length === 0 ? 0 : tags[value].id} /> */}
    </div>
  );
};

export default Tag;
