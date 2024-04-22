import { Controller, useForm } from "react-hook-form";

import Button from "@/components/Button";
import { DialogClose, DialogFooter } from "@/components/Dialog";
import FormErrorMessage from "@/components/Form/FormErrorMessage";
import FormLabel from "@/components/Form/FormLabel";
import TextAreaInput from "@/components/Inputs/TextAreaInput";
import TextInput from "@/components/Inputs/TextInput";
import { useCreateTodo } from "@/services/todos";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { INewGroupInput, newGroupValidation } from "../config";

interface NewGroupProps {
  onSuccess: () => void;
}

const NewGroupForm = ({ onSuccess }: NewGroupProps) => {
  const {
    control,
    formState: { isValid, isDirty, errors },
    handleSubmit,
  } = useForm<INewGroupInput>({
    resolver: zodResolver(newGroupValidation),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const { mutate, isPending } = useCreateTodo();

  const onSubmit = handleSubmit(({ title, description }) => {
    mutate(
      {
        title,
        description,
      },
      {
        onSuccess: () => {
          toast.success("New Todo has been created successfully");
          onSuccess?.();
        },
        onError: () => {
          toast.error("Failed creating new todo");
        },
      }
    );
  });

  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmit}>
      <Controller
        control={control}
        name="title"
        render={({ field }) => {
          return (
            <div className="flex flex-col gap-2">
              <FormLabel htmlFor={field.name}>Title</FormLabel>
              <TextInput placeholder="Placeholder" {...field} />
              <FormErrorMessage>{errors?.title?.message}</FormErrorMessage>
            </div>
          );
        }}
      />

      <Controller
        control={control}
        name="description"
        render={({ field }) => {
          return (
            <div className="flex flex-col gap-2">
              <FormLabel htmlFor={field.name}>Description</FormLabel>
              <TextAreaInput placeholder="Placeholder" {...field} />

              <FormErrorMessage>
                {errors?.description?.message}
              </FormErrorMessage>
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

        <Button
          type="submit"
          disabled={!isValid || !isDirty || isPending}
          isLoading={isPending}
        >
          Submit
        </Button>
      </DialogFooter>
    </form>
  );
};

export default NewGroupForm;
