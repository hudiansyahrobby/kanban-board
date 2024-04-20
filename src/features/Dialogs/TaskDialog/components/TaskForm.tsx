import React from "react";
import { Controller, useForm } from "react-hook-form";

import Button from "@/components/Button";
import { DialogClose, DialogFooter } from "@/components/Dialog";
import FormErrorMessage from "@/components/Form/FormErrorMessage";
import FormLabel from "@/components/Form/FormLabel";
import TextInput from "@/components/Inputs/TextInput";
import { formatPercentage } from "@/libs/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ITaskInput, taskValidation } from "../config";

interface TaskFormProps {}

const TaskForm: React.FC<TaskFormProps> = () => {
  const {
    control,
    formState: { isValid, isDirty, errors },
  } = useForm<ITaskInput>({
    resolver: zodResolver(taskValidation),
    mode: "onChange",
    defaultValues: {
      name: "",
      progress: "",
    },
  });

  console.log(errors);
  return (
    <form className="flex flex-col gap-2">
      <Controller
        control={control}
        name="name"
        render={({ field }) => {
          return (
            <div className="flex flex-col gap-2">
              <FormLabel htmlFor={field.name}>Task Name</FormLabel>
              <TextInput placeholder="Type your Task" {...field} />
              <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
            </div>
          );
        }}
      />

      <Controller
        control={control}
        name="progress"
        render={({ field }) => {
          return (
            <div className="flex flex-col gap-2">
              <FormLabel htmlFor={field.name}>Progress</FormLabel>
              <TextInput
                className="w-[143px]"
                {...field}
                placeholder="70%"
                onChange={(e) =>
                  field.onChange(formatPercentage(e.target.value))
                }
                onKeyDown={(e) => {
                  if (e.key == "Backspace") {
                    field.onChange(field.value.replace("%", ""));
                  }
                }}
              />
              <FormErrorMessage>{errors?.progress?.message}</FormErrorMessage>
            </div>
          );
        }}
      />

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline" type="button">
            Cancel
          </Button>
        </DialogClose>

        <Button type="submit" disabled={!isValid || !isDirty}>
          Save Task
        </Button>
      </DialogFooter>
    </form>
  );
};

export default TaskForm;
