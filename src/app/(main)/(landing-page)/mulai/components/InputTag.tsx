import React from 'react';
import { useTagInput } from '@/components/input/tag/hooks/useTagInput';
import { TagInput } from '@/components/input/tag/TagInput';
import { InputTagsData } from '@/app/(main)/(landing-page)/mulai/data/InputTag.data';

function InputTag() {
  const { addedTags, removeTag, toggleTag, unaddedTags } =
    useTagInput(InputTagsData);

  return (
    <TagInput
      addedTags={addedTags}
      unaddedTags={unaddedTags}
      onToggle={toggleTag}
      onRemove={removeTag}
    />
  );
}

export default InputTag;
