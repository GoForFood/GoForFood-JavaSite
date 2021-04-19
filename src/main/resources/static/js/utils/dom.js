class _Dom {

    static async AppendHTML(route, tag = "main") {
        let response = await axios.get(route);

        if (response.status == 200) {
            let data = $(response.data);
            $(tag).append(data);

            return data;
        }

        return false;
    }

    static async AppendModal(route, tag = "main") {
        let modal = await this.AppendHTML(route, tag);

        if (modal) {
            modal.modal("show");
            return modal;
        }

        return false;
    }

    static CloseModal(modalId) {
        $("#" + modalId).modal('hide').remove();
    }
}