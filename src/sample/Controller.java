package sample;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.stage.Stage;

public class Controller{

    @FXML
    private Button btn;

    @FXML
    private Label label;

    @FXML
    private void onClicked(ActionEvent event) {

        if (label.getText().equals("Welcome to Programming!")) {
            label.setText("This is FordSoft!");
        }
        else {
            label.setText("Welcome to Programming!");
        }
    }


    public void start(Stage primaryStage) {

        btn.setOnAction(event -> onClicked(event));




    }


}
